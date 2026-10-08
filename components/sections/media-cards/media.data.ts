export interface MediaItem {
  id: string
  title: string
  year: string
  duration: string
  rating: string
  image: string
}

export const mediaItems: MediaItem[] = [
  {
    id: "media-01",
    title: "The Last of Us",
    year: "2020–2023",
    duration: "1 Season",
    rating: "7.3",
    image: "/images/last-of-us.jpg",
  },
  {
    id: "media-02",
    title: "Ted Lasso",
    year: "2020–2023",
    duration: "3 Seasons",
    rating: "7.8",
    image: "/images/ted-lasso.jpg",
  },
  {
    id: "media-03",
    title: "Ant-Man and the Wasp: Quantumania",
    year: "2022",
    duration: "2h 49m",
    rating: "7.3",
    image: "/images/ant-man.jpg",
  },
  {
    id: "media-04",
    title: "Interstellar",
    year: "2014",
    duration: "2h 29m",
    rating: "8.7",
    image: "/images/interstellar.jpg",
  },
  {
    id: "media-05",
    title: "Inception",
    year: "2010",
    duration: "2h 28m",
    rating: "9.1",
    image: "/images/inception.jpg",
  },
]