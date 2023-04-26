import { ref, computed } from "vue"

export const useSearch = (items: any, filters = ["opening_crawl"]) => {
  const searchTerm = ref("")
  const filteredItems = computed(() => {
    return items.value.filter((item: any) => {
      return filters.some(
        filter => item[filter].toLowerCase().includes(
          searchTerm.value.toLowerCase()
        )
      )
    })
  })
  return { searchTerm, filteredItems }
}