mongoimport -h localhost -d nodebooks-development -c transactions -f details,postDate,description,amount,type,balance,docId,account -type csv -file $1 --headerline
