const crypto = require("crypto");
const secret = "pppppppppppppppppppppppppppppppp"; // 32 char long secret

const encrypt = (password) =>{
    const iv = Buffer.from(crypto.randomBytes(16)); // 16 bit long buffer
    const cipher = crypto.createCipheriv('aes-256-ctr',Buffer.from(secret),iv);

    const encryptedPassword = Buffer.concat([
        cipher.update(password),
        cipher.final(),
    ]);

    return {iv: iv.toString('hex'), password: encryptedPassword.toString('hex')};
};


const decrypt = (encryption) =>{
    const decipher = crypto.createDecipheriv(
        'aes-256-ctr',
        Buffer.from(secret),
        Buffer.from(encryption.iv, 'hex')
    );

    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.password,'hex')),
        decipher.final(),
    ]);

    return decryptedPassword.toString();
};

module.exports = {encrypt, decrypt};