import sql from 'mssql'

const config = {
    user: process.env.ENV_USER,
    password: process.env.ENV_PASSWORD,
    server: process.env.ENV_SERVER,
    database: process.env.ENV_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

export const getConnection = async () => {
    try {
        const pool = await sql.connect(config)
        return pool
    } catch (e) {
        console.log("getConnection: ", e)
    }
}