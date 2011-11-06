#!/bin/bash
# Backup with compression for Linux
# F:\wamp\bin\mysql\mysql5.1.32\bin\mysqldump -u root -p hort | gzip -9 > hort.backup.sql.gz


# Backup
# F:\wamp\bin\mysql\mysql5.1.32\bin\mysqldump -u root -p hort > hort.backup.sql
# C:\xampp\mysql\bin\mysqldump -c -u root -p hort > hort.backup.sql


# Restore
mysql -u root -p hort < ./hort.fixtures.sql


# Restore from a compressed file for Linux
# gunzip < hort.backup.sql.gz | F:\wamp\bin\mysql\mysql5.1.32\bin\mysql -u root -p hort
