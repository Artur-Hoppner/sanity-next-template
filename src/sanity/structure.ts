import type { StructureResolver } from "sanity/structure"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.listItem()
        .title("Landing Page")
        .child(
          S.editor()
            .id("landingPageSingleton")
            .schemaType("landingPage")
            .documentId("landingPageSingleton")
        ),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "landingPage"].includes(item.getId()!)
      )
    ])
