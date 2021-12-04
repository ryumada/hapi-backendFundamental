# Database Specification

Database name &nbsp;&nbsp;&nbsp;&nbsp; : **notesapp**

Database engine &nbsp;&nbsp; : PostgreSQL


# Table List
- [notes](#notes)
- [users](#users)

## notes
| No. | Nama Properti | Tipe Data   | Ketentuan   |
|-----|---------------|-------------|-------------|
| 1.  | id            | VARCHAR(50) | PRIMARY KEY |
| 2.  | title         | TEXT        | NOT NULL    |
| 3.  | body          | TEXT        | NOT NULL    |
| 4.  | tags          | TEXT[]      | NOT NULL    |
| 5.  | created_at    | TEXT        | NOT NULL    |
| 6.  | updated_at    | TEXT        | NOT NULL    |

## users
| No. | Nama Properti | Tipe Data   | Ketentuan        |
|-----|---------------|-------------|------------------|
| 1.  | id            | VARCHAR(50) | PRIMARY KEY      |
| 2.  | username      | VARCHAR(50) | UNIQUE, NOT NULL |
| 3.  | password      | TEXT        | NOT NULL         |
| 4.  | fullname      | TEXT        | NOT NULL         |