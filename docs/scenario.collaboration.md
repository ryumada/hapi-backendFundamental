Folder: Collaborations

## Skenario 1: Adding Note using Owner User
- status code: **201** (Created)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is **noteId** exist?

## Skenario 2: Adding Collaborator User as Collaborator to Added Note
- status code: **201** (Created)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is **collaborationId** exist?

## Skenario 3: Getting All Notes using Collaborator User
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is the result an **array** named **notes** that have **one item**?

## Skenario 4: Getting Added Note using Collaborator User
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**

## Skenario 5: Editing Added Note using Collaborator User
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**

## Skenario 6: Deleting Added Note using Collaborator User
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - does the result have **correct property & value**?

## Skenario 7: Deleting Collaborator User from Collaborator to Added Note
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - does the result have **correct property & value**?

## Skenario 8: Adding Collaborator User as Collaborator to Added Note using Collaborator User
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - does the result have **correct property & value**?

## Skenario 9: Getting All Notes using Collaborator User
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is the result an **array** named **notes** that have **zero (0) item**?

## Skenario 10: Getting Added Note using Collaborator User
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - does the result have **correct property & value**?

## Skenario 11: Editing Added Note using Collaborator User
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - does the result have **correct property & value**?

## Skenario 12: Deleting Added Note using Owner User
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**