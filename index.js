const pgp = require("pg-promise")()

pgp.pg.defaults.ssl = {
	rejectUnauthorized: false // 自己証明書を有効に変更
}
  

const db = pgp({
	host: 'ec2-35-171-250-21.compute-1.amazonaws.com',
	user: 'yrukxmdgnsxqlw',
	database: 'd2uuqa38bme5q9',
	password: '4f08f2cb878b021a31494040159fb41732d32b652268604b646f480fdc6de57b',
	port: 5432
})

const getHotels = async() => {
	try {
	  const hotels = await db.any("SELECT * FROM users")
	  console.log(hotels)
	  return hotels
	} catch (e) {
	  console.log(e)
	}
}

getHotels()