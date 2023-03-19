const pool = require('../database');

const User = {
    getAllUsers: (callback) => {
        pool.query('SELECT * FROM users', (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    getUserById: (id, callback) => {
        pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results[0]);
        });
    },

    addUser: (data, callback) => {
        pool.query('INSERT INTO users SET ?', data, (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    updateUser: (id, data, callback) => {
        pool.query('UPDATE users SET ? WHERE id = ?', [data, id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    deleteUser: (id, callback) => {
        pool.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    }
};



module.exports = User;