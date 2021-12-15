Folder: Images



## Skenario 1: Upload Image
- provision:
  - the uploaded file is accessible through **file location** given and give 200 status code
- response header:
  - status code: **201** ()
  - **Content-Type**: **application/json; charset=utf-8**
- response body:
  ```json
  {
    "status": "success",
    "data": {
      "fileLocation": "http://localhost:5000/path/to/flower.jpg"
    }
  }
  ```

## Skenario 2: Upload Image with Non-Image File
- provision:
  - is the response body give the correct properties and values?
- response header:
  - status code: **400** ()
  - **Content-Type**: **application/json; charset=utf-8**
