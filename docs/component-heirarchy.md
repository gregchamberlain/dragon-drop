# Component Heirarchy

**App**

- Home
  - AuthFormContainer (createSession, createUser)
    - AuthForm (createSession, createUser)

- SitesIndexContainer (sites, createSite, requestTemplates, templates)
  - SitesIndex (sites)
  - CreateSiteModal (createSite, requestTemplates, templates)

- AccountContainer (currentUser, updateCurrentUser)
  - Account (updateCurrentUser)

- SiteDetailContainer (site pages)
  - SiteDetail (site pages)
    - SitePreviewContainer (site, pages, components)
      - SitePreview (site, pages, components)
    - Sidebar
    - EditorContainer (page components)
      - Editor (page components)
        - Tabs
          - PageNavigationContainer (createPage)
            - PageNavigation (createPage)
          - PageSettingsContainer (updatePage)
            - PageSettings (updatePage)
          - ComponentCatalogContainer (addComponent)
            - ComponentCatalog (addComponent)
        - LayoutEditorContainer (components, removeComponent, updateComponentLayout)
          - LayoutEditor (components, removeComponent, updateComponentLayout)
        - PropEditorContainer (component, updateComponentProps, inputTypes)
          - PropEditor (component, updateComponentProps, inputTypes)
        - ToolbarContainer (saveLayout)
          - Toolbar (saveLayout)
    - ProductsIndexContainer [BONUS]
      - ProductsIndex
    - SiteSettingsContainer (updateSite)
      - SiteSettings (updateSite)


## Routes
|Path                               |Component               |
|: ------------------------------- :|: -------------------- :|
| /                                 | Home                   |
| /account                          | AccountContainer       |
| /sites                            | SitesIndexContainer    |
| /sites/:site_id                   | SiteDetailContainer    |
| /sites/:site_id/editor            | EditorContainer        |
| /sites/:site_id/editor/:page_id   | LayoutEditorContainer  |
| /sites/:site_id/preview           | SitePreview            |
| /sites/:site_id/products          | ProductsIndexContainer |
| /sites/:site_id/settings          | SiteSettingsContainer  |
