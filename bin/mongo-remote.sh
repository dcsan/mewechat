set -x
source bin/dot.env

mongo "${MONGOHOST}:${MONGOPORT}/${MONGOLAB_DBNAME}" -u $MONGOUSER -p $MONGOPASS

# mongo ds041673.mongolab.com:41673/chatu -u <dbuser> -p <dbpassword>
