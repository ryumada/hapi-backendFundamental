Folder: Authorizations

- [Skenario 1: Adding Notes using User A](#skenario-1-adding-notes-using-user-a)
- [Skenario 2: Adding Notes using User B](#skenario-2-adding-notes-using-user-b)
- [Skenario 3: Getting All Notes using User A](#skenario-3-getting-all-notes-using-user-a)
- [Skenario 4: Getting All Notes using User B](#skenario-4-getting-all-notes-using-user-b)
- [Skenario 5: Getting Note Owned by User A using User A](#skenario-5-getting-note-owned-by-user-a-using-user-a)
- [Skenario 6: Getting Note Owned by User B using User B](#skenario-6-getting-note-owned-by-user-b-using-user-b)
- [Skenario 7: Getting Note Owned by User A using User B](#skenario-7-getting-note-owned-by-user-a-using-user-b)
- [Skenario 8: Update Note Owned by User A using User A](#skenario-8-update-note-owned-by-user-a-using-user-a)
- [Skenario 9: Update Note Owned by User B using User B](#skenario-9-update-note-owned-by-user-b-using-user-b)
- [Skenario 10: Update Note Owned by User A using User B](#skenario-10-update-note-owned-by-user-a-using-user-b)
- [Skenario 11: Delete Note Owned by User A using User B](#skenario-11-delete-note-owned-by-user-a-using-user-b)
- [Skenario 12: Delete Note Owned by User A using User A](#skenario-12-delete-note-owned-by-user-a-using-user-a)
- [Skenario 12: Delete Note Owned by User B using User B](#skenario-12-delete-note-owned-by-user-b-using-user-b)
- [notes](#notes)

## Skenario 1: Adding Notes using User A
- status code: **201** (Created)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is **noteId** exist?

## Skenario 2: Adding Notes using User B
- status code: **201** (Created)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is **noteId** exist?

## Skenario 3: Getting All Notes using User A
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is the result an **array** named **notes** that have **one item**?

## Skenario 4: Getting All Notes using User B
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is the result an **array** named **notes** that have **one item**?

## Skenario 5: Getting Note Owned by User A using User A
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is the result an **object** named **notes**?

## Skenario 6: Getting Note Owned by User B using User B
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- body response (**data**)
  - is the result an **object** named **notes**?

## Skenario 7: Getting Note Owned by User A using User B
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- does the result have **correct property & value**?

## Skenario 8: Update Note Owned by User A using User A
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**

## Skenario 9: Update Note Owned by User B using User B
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**

## Skenario 10: Update Note Owned by User A using User B
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- does the result have **correct property & value**?

## Skenario 11: Delete Note Owned by User A using User B
- status code: **403** (Forbidden)
- header response
  - **Content-Type**: **application/json; charset=utf-8**
- does the result have **correct property & value**?

## Skenario 12: Delete Note Owned by User A using User A
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**

## Skenario 12: Delete Note Owned by User B using User B
- status code: **200** (OK)
- header response
  - **Content-Type**: **application/json; charset=utf-8**

## notes
- karena memerlukan prescript untuk setiap request di atas untuk membuat user A dan B, buat pretest skrip pada folder di postman