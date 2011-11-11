#! /bin/bash
#How to call: sudo ./reloadDatabase.sh
app/console doctrine:database:drop --force
app/console doctrine:database:create
app/console doctrine:schema:create
app/console doctrine:fixtures:load
app/console cache:clear
chmod -R 777 app/cache
mysql -u root -p hort < ./hort.fixtures.sql
