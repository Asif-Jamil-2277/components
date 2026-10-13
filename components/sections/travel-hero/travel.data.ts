export interface TravelCardItem {
  id: string
  title: string
  date: string
  location: string
  image: string
  flag: string
  positionClass: string // For absolute layout around phone
}

export const travelCards: TravelCardItem[] = [
  {
    id: "card-1",
    title: "Bucharest City",
    date: "Apr 30 - May 5",
    location: "Romania",
    image: "/images/interstellar.jpg",
    flag: "🇷🇴",
    positionClass: "left-[-40px] sm:left-[20px] top-[120px]",
  },
  {
    id: "card-2",
    title: "Paris",
    date: "Apr 28 - May 3",
    location: "France",
    image: "/images/inception.jpg",
    flag: "🇫🇷",
    positionClass: "right-[-40px] sm:right-[20px] top-[140px]",
  },
]
