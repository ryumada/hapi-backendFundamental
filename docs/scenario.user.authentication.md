Folder: Authentications

- [Skenario 1: Post Authentication with Valid Credential (login dengan kredensial yang benar)](#skenario-1-post-authentication-with-valid-credential-login-dengan-kredensial-yang-benar)
- [Skenario 2: Post Authentication with Invalid Credential (login dengan kredensial yang salah)](#skenario-2-post-authentication-with-invalid-credential-login-dengan-kredensial-yang-salah)
- [Skenario 3:  Getting All Notes Without Access Token (mendapatkan seluruh notes tanpa akses token)](#skenario-3--getting-all-notes-without-access-token-mendapatkan-seluruh-notes-tanpa-akses-token)
- [Skenario 4: Put Authentications with Valid Refresh Token (memperbarui access token dengan refresh token yang benar)](#skenario-4-put-authentications-with-valid-refresh-token-memperbarui-access-token-dengan-refresh-token-yang-benar)
- [Skenario 5: Put Authentications with Invalid Refresh Token (memperbarui access token dengan refresh token yang salah)](#skenario-5-put-authentications-with-invalid-refresh-token-memperbarui-access-token-dengan-refresh-token-yang-salah)
- [Skenario 6: Delete Authentications with Valid Refresh Token (logout dengan refresh token yang benar)](#skenario-6-delete-authentications-with-valid-refresh-token-logout-dengan-refresh-token-yang-benar)
- [Skenario 7: Delete Authentications with Invalid Refresh Token (logout dengan refresh token yang salah)](#skenario-7-delete-authentications-with-invalid-refresh-token-logout-dengan-refresh-token-yang-salah)
- [sources](#sources)

Skenario 1: Post Authentication with Valid Credential (login dengan kredensial yang benar)
---
---
- Request URL:
  - method: **POST**
  - path: **/authentications**
  - body:
    - **username**: string
    - **password**: string
- Skenario Uji:
  - status code: **201**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**
  - body response
    - is **object**?
    - have **correct property & value**?
    - have **accessToken** & **refreshToken**?

Skenario 2: Post Authentication with Invalid Credential (login dengan kredensial yang salah)
---
---
- Request URL:
  - method: **POST**
  - path: **/authentications**
  - body:
    - **username**: string
    - **password**: string
- Skenario Uji:
  - status code: **401**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**
  - body response
    - is **object**?
    - have **correct property & value**?

Skenario 3:  Getting All Notes Without Access Token (mendapatkan seluruh notes tanpa akses token)
---
---
- Request URL:
  - method: **GET**
  - path: **/notes**
- Skenario Uji:
  - status code: **401**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**

Skenario 4: Put Authentications with Valid Refresh Token (memperbarui access token dengan refresh token yang benar)
---
---
- Request URL:
  - method: **PUT**
  - path: **/authentications**
- Skenario Uji:
  - status code: **200**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**
  - body response
    - is **object**?
    - have **correct property & value**?
    - have **accessToken**?
    - **accessToken**: **NOTNULL**

Skenario 5: Put Authentications with Invalid Refresh Token (memperbarui access token dengan refresh token yang salah)
---
---
- Request URL:
  - method: **PUT**
  - path: **/authentications**
- Skenario Uji:
  - status code: **400**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**
  - body response
    - is **object**?
    - have **correct property & value**?

Skenario 6: Delete Authentications with Valid Refresh Token (logout dengan refresh token yang benar)
---
---
- Request URL:
  - method: **DELETE**
  - path: **/authentications**
  - body:
    - **refreshToken**: string
- Skenario Uji:
  - status code: **200**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**
  - body response
    - is **object**?
    - have **correct property & value**?

Skenario 7: Delete Authentications with Invalid Refresh Token (logout dengan refresh token yang salah)
---
---
- Request URL:
  - method: **DELETE**
  - path: **/authentications**
  - body:
    - **refreshToken**: string
- Skenario Uji:
  - status code: **400**
  - header response
    - **Content-Type**: **application/json; charset=utf-8**
  - body response
    - is **object**?
    - have **correct property & value**?

sources
---
---
1. Dicoding Indonesia, “Membuat Skenario Testing untuk Fitur Authentications,” Dicoding. https://www.dicoding.com/academies/271/tutorials/17626?from=17623 (accessed Dec. 05, 2021).



