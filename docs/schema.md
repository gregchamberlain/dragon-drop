# Schema Information

## users
|column name    |data type|not null|index|unique|primary key|
| ------------- | ------- |:------:|:---:|:----:|:---------:|
|id             |integer  |✓       |✓    |✓     |✓          |
|email          |string   |✓       |✓    |✓     |           |
|password_digest|string   |✓       |     |      |           |
|session_token  |string   |✓       |✓    |✓     |   &nbsp;  |

## sites
|column name|data type|default|not null|index|unique|foreign key|primary key|
| --------- | ------- |-------|:------:|:---:|:----:|:---------:|:---------:|
|id         |integer  |       |✓       |✓    |✓     |           |✓          |
|name       |string   |       |✓       |     |      |           |           |
|identifier |string   |       |✓       |✓    |✓     |           |           |
|template   |boolean  |false  |✓       |     |      |           |           |
|user_id    |integer  |       |✓       |✓    |      |✓user      |  &nbsp;   |

## pages

|column name|data type|default|not null|index|unique|foreign key|primary key|
| --------- | ------- | ----- |:------:|:---:|:----:|:---------:|:---------:|
|id         |integer  |       |✓       |✓    |      |           |✓          |
|name       |string   |       |✓       |     |✓site |           |           |
|path       |string   |       |✓       |     |✓site |           |           |
|template   |boolean  |false  |✓       |     |      |           |           |
|site_id    |integer  |       |✓       |✓    |      |✓site      |  &nbsp;   |

## components

|column name|data type    |default|not null|index|unique|foreign key|primary key|
| --------- | ----------- | ----- |:------:|:---:|:----:|:---------:|:---------:|
|id         |integer      |       |✓       |✓    |✓     |           |✓          |
|name       |string       |       |✓       |     |      |           |           |
|layout     |string       |       |✓       |     |      |           |           |
|props      |string(JSON) |       |✓       |     |      |           |           |
|page_id    |string(JSON) |       |✓       |✓    |      |✓page      |  &nbsp;   |
