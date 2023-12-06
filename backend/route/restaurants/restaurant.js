const express = require("express");
const db = require("../../config/db");
const router = new express.Router();

//CRUD CREATION RESTAURANT


//read
async function getAllRestaurants() {
    try {
        const selectQuery = `SELECT * FROM restaurants`;
        const [restaurants] = await pool.query(selectQuery);
        return restaurants;
    } catch (error) {
        throw new Error('Erreur lors de la récupération des restaurants : ' + error.message);
    }
}

//create
async function createRestaurant(restaurantDetails) {
    try {
        const {
            name,
            description,
            address,
            opening_time,
            closing_time,
            latitude,
            longitude,
            regim,
            picture,
            avis
        } = restaurantDetails;

        const insertQuery = `
            INSERT INTO restaurants (name, description, address, opening_time, closing_time, latitude, longitude, regim, picture, avis)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const values = [
            name,
            description,
            address,
            opening_time,
            closing_time,
            latitude,
            longitude,
            regim,
            picture,
            avis
        ];

        await pool.query(insertQuery, values);
        return 'Restaurant créé avec succès.';
    } catch (error) {
        throw new Error('Erreur lors de la création du restaurant : ' + error.message);
    }
}

//update:id
async function updateRestaurantById(restaurantId, updatedDetails) {
    try {
        const updateQuery = `
            UPDATE restaurants
            SET name = ?, description = ?, address = ?, opening_time = ?, closing_time = ?,
            latitude = ?, longitude = ?, regim = ?, picture = ?, avis = ?
            WHERE id = ?;
        `;

        const {
            name,
            description,
            address,
            opening_time,
            closing_time,
            latitude,
            longitude,
            regim,
            picture,
            avis
        } = updatedDetails;

        const values = [
            name,
            description,
            address,
            opening_time,
            closing_time,
            latitude,
            longitude,
            regim,
            picture,
            avis,
            restaurantId
        ];

        await pool.query(updateQuery, values);
        return 'Restaurant mis à jour avec succès.';
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour du restaurant : ' + error.message);
    }
}

//delete
async function deleteRestaurantById(restaurantId) {
    try {
        const deleteQuery = `DELETE FROM restaurants WHERE id = ?`;
        await pool.query(deleteQuery, [restaurantId]);
        return 'Restaurant supprimé avec succès.';
    } catch (error) {
        throw new Error('Erreur lors de la suppression du restaurant : ' + error.message);
    }
}
