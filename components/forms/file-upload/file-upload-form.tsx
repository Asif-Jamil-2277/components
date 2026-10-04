"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Check,
  CheckCircle2,
  CloudUpload,
  File,
  FileImage,
  FileText,
  FileType2,
  Image as ImageIcon,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import {
  ChangeEvent,
  DragEvent,
  useRef,
  useState,
} from "react";

export interface FileUploadFormProps {
  brandName?: string;
  title?: string;
  description?: string;
  primaryColor?: string;
  buttonText?: string;
  maxFiles?: number;
  maxFileSizeMB?: number;
  acceptedTypes?: string[];
  onSubmit?: (files: File[]) => void | Promise<void>;
}

type UploadItem = {
  id: string;
  file: File;
  progress: number;
};

const defaultAcceptedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

export default function FileUploadForm({
  brandName = "YourBrand",
  title = "Upload your documents",
  description = "Add the files you need. You can upload multiple documents at once.",
  primaryColor = "#2563eb",
  buttonText = "Continue",
  maxFiles = 5,
  maxFileSizeMB = 10,
  acceptedTypes = defaultAcceptedTypes,
  onSubmit,
}: FileUploadFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<UploadItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return FileImage;
    }

    if (file.type === "application/pdf") {
      return FileText;
    }

    return FileType2;
  };

  const validateFiles = (incoming: File[]) => {
    if (!incoming.length) return [];

    if (files.length + incoming.length > maxFiles) {
      setError(`You can upload a maximum of ${maxFiles} files.`);
      return [];
    }

    const valid: File[] = [];

    for (const file of incoming) {
      if (!acceptedTypes.includes(file.type)) {
        setError(`${file.name} is not a supported file type.`);
        continue;
      }

      if (file.size > maxFileSizeMB * 1024 * 1024) {
        setError(
          `${file.name} exceeds the ${maxFileSizeMB}MB size limit.`
        );
        continue;
      }

      valid.push(file);
    }

    return valid;
  };

  const addFiles = (incoming: File[]) => {
    setError("");

    const validFiles = validateFiles(incoming);

    if (!validFiles.length) return;

    const newItems: UploadItem[] = validFiles.map((file) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
      file,
      progress: 100,
    }));

    setFiles((prev) => [...prev, ...newItems]);
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selected = Array.from(event.target.files ?? []);

    addFiles(selected);

    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(event.dataTransfer.files);

    addFiles(droppedFiles);
  };

  const removeFile = (id: string) => {
    setFiles((prev) =>
      prev.filter((item) => item.id !== id)
    );
    setError("");
  };

  const handleSubmit = async () => {
    if (!files.length) {
      setError("Please upload at least one file.");
      return;
    }

    setError("");
    setIsUploading(true);

    setFiles((prev) =>
      prev.map((item) => ({
        ...item,
        progress: 0,
      }))
    );

    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise((resolve) =>
        setTimeout(resolve, 70)
      );

      setFiles((prev) =>
        prev.map((item) => ({
          ...item,
          progress,
        }))
      );
    }

    try {
      await onSubmit?.(files.map((item) => item.file));

      await new Promise((resolve) =>
        setTimeout(resolve, 350)
      );

      setSubmitted(true);
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  if (submitted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background: `${primaryColor}12`,
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative w-full max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 180,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
            style={{
              background: `${primaryColor}10`,
              color: primaryColor,
            }}
          >
            <CheckCircle2 className="h-10 w-10" />
          </motion.div>

          <p
            className="mt-7 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: primaryColor }}
          >
            Upload complete
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Your files are ready.
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
            {files.length}{" "}
            {files.length === 1 ? "file has" : "files have"} been
            successfully uploaded.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fafc] px-4 py-6 sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: `${primaryColor}10`,
          }}
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background: `${primaryColor}0d`,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.78fr_1.22fr]">
          {/* Visual panel */}
          <div className="relative hidden overflow-hidden bg-slate-950 p-10 lg:flex">
            <div
              className="absolute -right-28 -top-28 h-80 w-80 rounded-full blur-3xl"
              style={{
                background: `${primaryColor}28`,
              }}
            />

            <div
              className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl"
              style={{
                background: `${primaryColor}16`,
              }}
            />

            <div className="relative flex w-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    <CloudUpload className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-semibold text-white">
                    {brandName}
                  </span>
                </div>

                <p
                  className="mt-16 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{
                    color: `${primaryColor}cc`,
                  }}
                >
                  Secure file upload
                </p>

                <h1 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-tight text-white">
                  {title}
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </div>

              {/* Graphic */}
              <div className="relative mt-14 flex min-h-[260px] items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-56 w-56 rounded-full border border-white/10"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-40 w-40 rounded-full border border-white/10"
                />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl"
                >
                  <Upload
                    className="h-9 w-9"
                    style={{
                      color: primaryColor,
                    }}
                  />
                </motion.div>

                <motion.span
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                  className="absolute right-3 top-10 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[10px] font-medium text-slate-300 backdrop-blur-md"
                >
                  PDF
                </motion.span>

                <motion.span
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-10 left-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[10px] font-medium text-slate-300 backdrop-blur-md"
                >
                  IMAGE
                </motion.span>
              </div>

              <p className="border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">
                Supported files are validated before they are added
                to the upload queue.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-9 lg:p-12">
            <div className="mb-8 lg:hidden">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  <CloudUpload className="h-4 w-4" />
                </div>

                <span className="text-sm font-semibold text-slate-900">
                  {brandName}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: primaryColor,
                }}
              >
                Documents
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Upload files
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Drag your files here or browse from your device.
              </p>
            </div>

            {/* Dropzone */}
            <motion.div
              animate={{
                scale: isDragging ? 1.01 : 1,
              }}
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className="group relative cursor-pointer overflow-hidden border border-dashed p-7 text-center transition sm:p-10"
              style={{
                borderColor: isDragging
                  ? primaryColor
                  : "#cbd5e1",
                background: isDragging
                  ? `${primaryColor}08`
                  : "transparent",
              }}
            >
              <input
                ref={inputRef}
                type="file"
                multiple
                accept={acceptedTypes.join(",")}
                onChange={handleFileChange}
                className="hidden"
              />

              <motion.div
                animate={{
                  y: isDragging ? -5 : 0,
                }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  background: `${primaryColor}10`,
                  color: primaryColor,
                }}
              >
                <CloudUpload className="h-6 w-6" />
              </motion.div>

              <p className="mt-5 text-sm font-semibold text-slate-800">
                {isDragging
                  ? "Drop your files here"
                  : "Choose files or drag them here"}
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                PDF, JPG, PNG or WEBP · Max {maxFileSizeMB}MB
                each
              </p>
            </motion.div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm font-medium text-red-500">
                    {error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Files */}
            <AnimatePresence initial={false}>
              {files.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-7 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      Selected files
                    </span>

                    <span className="text-xs text-slate-400">
                      {files.length}/{maxFiles}
                    </span>
                  </div>

                  {files.map((item) => {
                    const Icon = getFileIcon(item.file);

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -20,
                        }}
                        className="group relative border-b border-slate-100 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                            style={{
                              background: `${primaryColor}0c`,
                              color: primaryColor,
                            }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-slate-800">
                              {item.file.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {formatSize(item.file.size)}
                            </p>

                            <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                              <motion.div
                                animate={{
                                  width: `${item.progress}%`,
                                }}
                                className="h-full rounded-full"
                                style={{
                                  backgroundColor: primaryColor,
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-2">
                            {item.progress === 100 &&
                              !isUploading && (
                                <Check
                                  className="h-4 w-4"
                                  style={{
                                    color: primaryColor,
                                  }}
                                />
                              )}

                            <button
                              type="button"
                              aria-label={`Remove ${item.file.name}`}
                              onClick={(event) => {
                                event.stopPropagation();
                                removeFile(item.id);
                              }}
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-9 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2
                  className="h-3.5 w-3.5"
                  style={{
                    color: primaryColor,
                  }}
                />
                Secure upload
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isUploading}
                className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                {isUploading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Uploading
                  </>
                ) : (
                  <>
                    {buttonText}
                    <ArrowIcon />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}