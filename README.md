SocialNetworkArtist_CMPE272_Group6
==============

> This is a team project for CMPE272 Class
> in San Jose State University
 - Team 6 project
 - Field: Web Developing - Social Network
 - Title: Social Network for Photographers

Dirctory
-----------
 - Design: Product documentation Link
 - src:	source code

Installation
-----------
 - Check your Python Version, 2.7.* would be best
 ```sh
Python -V
```
 - Install Django 1.6.2, see [django]
 - Check your Django version
 ```sh
 python -c "import django; print(django.get_version())"
 ```
 - Modify <your path>/src/SocialNwk/SocialNwk/setting.py 
 - Change MEDIA_ROOT
 ```sh
 MEDIA_ROOT = '/Users/leituo56/Documents/Code/Git/CMPE272-Group6/src/SocialNwk/media/'    # Change To Your Directory
 ```
 - Sync your database. Notice Django do not provide migration, alter table manually if table already exist
 ```sh
 python manage.py syncdb
 ```
 - Set a super user for your db
 - Run your server
 ```sh
 python manage.py runserver
 ```
 - Visit http://127.0.0.1:8000/

Tech
-----------
This work uses a number of open source projects to work properly:

* [django] - The Web framework for perfectionists with deadlines.
* [jQuery] - The Write Less, Do More, JavaScript Library. 

Team Member
--------------
* Xiaoli Jiang <jiangxiaoli821104@gmail.com>
* Tuo Lei <leituo56@gmail.com>
* Sammie-Xiu Lu <sammiexiu@gmail.com>
* Jennifer Wu <jenn.j.wu@gmail.com>
* Wenjia Zhang <wenjiazhang519@gmail.com>

License
----

MIT

[django]:https://www.djangoproject.com
[jQuery]:http://jquery.com