import bcrypt from 'bcrypt'

class Hash{

    static async password_hash(password) {
        return await bcrypt.hash(password, 8)
    }

}

export default Hash