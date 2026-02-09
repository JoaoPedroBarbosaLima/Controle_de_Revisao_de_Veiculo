import bcrypt from 'bcrypt'

class Hash{

    static async password_hash(password) {
        return await bcrypt.hash(password, 8)
    }

    static async compare_hash(password,password_hash) {
        return await bcrypt.compare(password, password_hash)
    }

}

export default Hash