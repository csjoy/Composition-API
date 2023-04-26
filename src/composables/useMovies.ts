import { ref, onBeforeMount } from "vue"

export interface Res {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export const useMovies = () => {
  const movies = ref<Res[]>([])
  const isLoading = ref(false)
  const error = ref<any>(null)

  const getMovies = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch("https://swapi.dev/api/films")
      if (!response.ok) {
        throw new Error("Failed to fetch movies")
      }
      const data = await response.json()
      movies.value = data.results
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  onBeforeMount(getMovies)
  return { movies, isLoading, error }
}