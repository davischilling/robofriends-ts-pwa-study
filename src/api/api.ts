export const apiCall = async (
  link: string
): Promise<TemplateStringsArray> => {
  const response = await fetch(link)
  return response.json()
}
