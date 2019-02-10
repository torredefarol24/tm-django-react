<h1>Django React Example</h1>

<p>CheckList for Running App</p>
<ul>
	<li> Install Package Dependencies</li>
	<li> Create DB Config File</li>
	<li> Provide Database Credentials</li>
	<li> Start <strong>Virtual Environment</strong></li>
	<li> Migrate & Start API!</li>
</ul>
<div style='width:50%; margin-top:36px;'>
<p> <input type="checkbox"> Install Package Dependencies</p>

```
$ pipenv install
```
<p> <input type="checkbox">Create DB Config File</p>

```
$ touch leadmanager/leadmanager/db_config.py
```
<p> <input type="checkbox"> Provide Database Credentials <br>Edit <em>leadmanager/leadmanager/db_config.py </em></p>

```
DBCONF = {
    'DB_NAME': 	<PG_DB_NAME>,
    'DB_USER': 	<PG_DB_USER>,
    'DB_PASS': 	<PG_DB_PASS>,
    'DB_HOST': 	<PG_DB_HOST>,
    'DB_PORT':  <PG_DB_PORT>,
}
```
<p> <input type="checkbox"> Start Virtual Environment</p>

```
$ pipenv shell
```
<p> <input type="checkbox">Migrate & Start API </p>

```
$ python leadmanager/manage.py makemigrations
$ python leadmanager/manage.py migrate
$ python leadmanager/manage.py runserver
```
</div>
