const express = require("express");
const db = require("../../config/db");
const router = new express.Router();

//CRUD CREATION MENU

// GET /restaurants/:restaurantId/menus : Récupérer tous les menus d'un restaurant spécifique.
async function getAllMenusForRestaurant(restaurantId) {
    try {
        const selectQuery = `
            SELECT * FROM menu
            WHERE restaurant_id = ?;
        `;
        const [menus] = await pool.query(selectQuery, [restaurantId]);
        return menus;
    } catch (error) {
        throw new Error('Erreur lors de la récupération des menus du restaurant : ' + error.message);
    }
}


// GET /restaurants/:restaurantId/menus/:menuId : Récupérer un menu spécifique d'un restaurant spécifique.
async function getMenuForRestaurantById(restaurantId, menuId) {
    try {
        const selectQuery = `
            SELECT * FROM menu
            WHERE restaurant_id = ? AND id = ?;
        `;
        const [menu] = await pool.query(selectQuery, [restaurantId, menuId]);
        return menu[0];
    } catch (error) {
        throw new Error('Erreur lors de la récupération du menu du restaurant : ' + error.message);
    }
}


// POST /restaurants/:restaurantId/menus : Créer un nouveau menu pour un restaurant spécifique.
async function createMenuForRestaurant(restaurantId, menuDetails) {
    try {
        const {
            name,
            description,
            avis,
            menu_items,
            price
        } = menuDetails;

        const insertQuery = `
            INSERT INTO menu (restaurant_id, name, description, avis, menu_items, price)
            VALUES (?, ?, ?, ?, ?, ?);
        `;

        const values = [
            restaurantId,
            name,
            description,
            avis,
            menu_items,
            price
        ];

        await pool.query(insertQuery, values);
        return 'Menu créé avec succès.';
    } catch (error) {
        throw new Error('Erreur lors de la création du menu : ' + error.message);
    }
}


// PUT /restaurants/:restaurantId/menus/:menuId : Mettre à jour un menu spécifique d'un restaurant spécifique.
async function updateMenuForRestaurantById(restaurantId, menuId, updatedDetails) {
    try {
        const {
            name,
            description,
            avis,
            menu_items,
            price
        } = updatedDetails;

        const updateQuery = `
            UPDATE menu
            SET name = ?, description = ?, avis = ?, menu_items = ?, price = ?
            WHERE restaurant_id = ? AND id = ?;
        `;

        const values = [
            name,
            description,
            avis,
            menu_items,
            price,
            restaurantId,
            menuId
        ];

        await pool.query(updateQuery, values);
        return 'Menu mis à jour avec succès.';
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour du menu : ' + error.message);
    }
}


// DELETE /restaurants/:restaurantId/menus/:menuId : Supprimer un menu spécifique d'un restaurant spécifique.
async function deleteMenuForRestaurantById(restaurantId, menuId) {
    try {
        const deleteQuery = `
            DELETE FROM menu
            WHERE restaurant_id = ? AND id = ?;
        `;
        await pool.query(deleteQuery, [restaurantId, menuId]);
        return 'Menu supprimé avec succès.';
    } catch (error) {
        throw new Error('Erreur lors de la suppression du menu : ' + error.message);
    }
}
