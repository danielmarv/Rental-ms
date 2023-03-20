const pool = require('../database');

const Rental = {
    getAllRentals: (callback) => {
        pool.query('SELECT * FROM rentals', (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    getRentalById: (id, callback) => {
        pool.query('SELECT * FROM rentals WHERE id = ?', [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results[0]);
        });
    },

    addRental: (data, callback) => {
        pool.query('INSERT INTO rentals SET ?', data, (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    updateRental: (id, data, callback) => {
        pool.query('UPDATE rentals SET ? WHERE id = ?', [data, id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },

    deleteRental: (id, callback) => {
        pool.query('DELETE FROM rentals WHERE id = ?', [id], (error, results, fields) => {
            if (error) {
                return callback(error);
            }

            return callback(null, results);
        });
    },
};

module.exports = Rental;