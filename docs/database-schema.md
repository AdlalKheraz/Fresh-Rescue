# Fresh Rescue - Schema de Base de Donnees

## Vue d'ensemble

Base de donnees PostgreSQL pour l'application Fresh Rescue.

---

## Tables

### 1. users
Table des utilisateurs de l'application.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT uuid_generate_v4() | Identifiant unique |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Email de l'utilisateur |
| password_hash | VARCHAR(255) | NOT NULL | Mot de passe hashe (bcrypt) |
| first_name | VARCHAR(100) | NOT NULL | Prenom |
| last_name | VARCHAR(100) | NOT NULL | Nom |
| phone | VARCHAR(20) | UNIQUE | Numero de telephone |
| avatar_url | TEXT | | URL de l'avatar |
| is_premium | BOOLEAN | DEFAULT FALSE | Statut abonnement Fresh+ |
| premium_expires_at | TIMESTAMP | | Date expiration premium |
| rescue_points | INTEGER | DEFAULT 0 | Points Rescue actuels |
| total_rescue_points | INTEGER | DEFAULT 0 | Total points gagnes (historique) |
| level | VARCHAR(20) | DEFAULT 'rookie' | Niveau actuel (rookie, hero, legend, planet_saver) |
| streak_days | INTEGER | DEFAULT 0 | Jours consecutifs d'achat |
| last_purchase_date | DATE | | Date du dernier achat |
| season_start_date | DATE | NOT NULL | Debut de la saison en cours |
| referral_code | VARCHAR(10) | UNIQUE | Code de parrainage |
| referrals_this_season | INTEGER | DEFAULT 0 | Parrainages cette saison (max 5) |
| shared_this_season | BOOLEAN | DEFAULT FALSE | A partage sur reseaux cette saison |
| co2_saved_kg | DECIMAL(10,2) | DEFAULT 0 | Kg de CO2 economises |
| meals_saved | INTEGER | DEFAULT 0 | Repas sauves |
| created_at | TIMESTAMP | DEFAULT NOW() | Date de creation |
| updated_at | TIMESTAMP | DEFAULT NOW() | Date de mise a jour |

### 2. stores
Magasins HyperFresh partenaires.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| name | VARCHAR(100) | NOT NULL | Nom du magasin (ex: HyperFresh Marly) |
| address | TEXT | NOT NULL | Adresse complete |
| city | VARCHAR(100) | NOT NULL | Ville |
| postal_code | VARCHAR(10) | NOT NULL | Code postal |
| latitude | DECIMAL(10,8) | NOT NULL | Latitude GPS |
| longitude | DECIMAL(11,8) | NOT NULL | Longitude GPS |
| phone | VARCHAR(20) | | Telephone du magasin |
| opening_hours | JSONB | | Horaires d'ouverture |
| is_active | BOOLEAN | DEFAULT TRUE | Magasin actif |
| created_at | TIMESTAMP | DEFAULT NOW() | |

### 3. categories
Categories de produits.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| name | VARCHAR(50) | UNIQUE, NOT NULL | Nom de la categorie |
| icon | VARCHAR(50) | | Nom de l'icone |
| display_order | INTEGER | DEFAULT 0 | Ordre d'affichage |

### 4. products
Produits disponibles.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| store_id | UUID | FOREIGN KEY (stores.id) | Magasin |
| category_id | UUID | FOREIGN KEY (categories.id) | Categorie |
| name | VARCHAR(200) | NOT NULL | Nom du produit |
| description | TEXT | | Description |
| image_url | TEXT | | URL de l'image |
| original_price | DECIMAL(10,2) | NOT NULL | Prix original |
| discount_price | DECIMAL(10,2) | NOT NULL | Prix reduit |
| discount_percent | INTEGER | NOT NULL | Pourcentage de reduction |
| stock | INTEGER | DEFAULT 0 | Stock disponible |
| expiry_date | DATE | NOT NULL | Date de peremption |
| is_flash_sale | BOOLEAN | DEFAULT FALSE | En vente flash |
| flash_sale_ends_at | TIMESTAMP | | Fin de la vente flash |
| co2_per_unit | DECIMAL(5,2) | DEFAULT 0.5 | Kg CO2 economise par unite |
| is_active | BOOLEAN | DEFAULT TRUE | Produit actif |
| created_at | TIMESTAMP | DEFAULT NOW() | |
| updated_at | TIMESTAMP | DEFAULT NOW() | |

### 5. orders
Commandes des utilisateurs.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| order_number | VARCHAR(20) | UNIQUE, NOT NULL | Numero de commande (FR-YYYY-MMDD-XXXX) |
| user_id | UUID | FOREIGN KEY (users.id) | Utilisateur |
| store_id | UUID | FOREIGN KEY (stores.id) | Magasin de retrait |
| status | VARCHAR(20) | DEFAULT 'pending' | Statut (pending, confirmed, ready, collected, cancelled) |
| subtotal | DECIMAL(10,2) | NOT NULL | Sous-total |
| discount_amount | DECIMAL(10,2) | DEFAULT 0 | Montant des reductions |
| premium_discount | DECIMAL(10,2) | DEFAULT 0 | Reduction premium (-15%) |
| total | DECIMAL(10,2) | NOT NULL | Total a payer |
| points_earned | INTEGER | DEFAULT 0 | Points Rescue gagnes |
| qr_code | TEXT | | QR code encode |
| pickup_code | VARCHAR(6) | | Code de retrait |
| collected_at | TIMESTAMP | | Date de retrait |
| created_at | TIMESTAMP | DEFAULT NOW() | |
| updated_at | TIMESTAMP | DEFAULT NOW() | |

### 6. order_items
Articles des commandes.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| order_id | UUID | FOREIGN KEY (orders.id) | Commande |
| product_id | UUID | FOREIGN KEY (products.id) | Produit |
| quantity | INTEGER | NOT NULL | Quantite |
| unit_price | DECIMAL(10,2) | NOT NULL | Prix unitaire |
| total_price | DECIMAL(10,2) | NOT NULL | Prix total |

### 7. badges
Badges disponibles.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| name | VARCHAR(100) | UNIQUE, NOT NULL | Nom du badge |
| description | TEXT | | Description |
| icon | VARCHAR(50) | | Icone |
| color | VARCHAR(20) | | Couleur |
| condition_type | VARCHAR(50) | NOT NULL | Type de condition (purchases, streak, category, etc.) |
| condition_value | INTEGER | | Valeur requise |
| condition_category | VARCHAR(50) | | Categorie requise (si applicable) |
| is_active | BOOLEAN | DEFAULT TRUE | Badge actif |

### 8. user_badges
Badges obtenus par les utilisateurs.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| user_id | UUID | FOREIGN KEY (users.id) | Utilisateur |
| badge_id | UUID | FOREIGN KEY (badges.id) | Badge |
| earned_at | TIMESTAMP | DEFAULT NOW() | Date d'obtention |
| UNIQUE | | (user_id, badge_id) | |

### 9. referrals
Parrainages.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| referrer_id | UUID | FOREIGN KEY (users.id) | Parrain |
| referred_id | UUID | FOREIGN KEY (users.id) | Filleul |
| status | VARCHAR(20) | DEFAULT 'pending' | Statut (pending, validated, expired) |
| validated_at | TIMESTAMP | | Date de validation |
| points_awarded | BOOLEAN | DEFAULT FALSE | Points attribues |
| season | VARCHAR(10) | NOT NULL | Saison (ex: 2025-Q1) |
| created_at | TIMESTAMP | DEFAULT NOW() | |

### 10. notifications
Notifications utilisateurs.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| user_id | UUID | FOREIGN KEY (users.id) | Utilisateur |
| type | VARCHAR(50) | NOT NULL | Type (order, promo, badge, system) |
| title | VARCHAR(200) | NOT NULL | Titre |
| message | TEXT | NOT NULL | Message |
| data | JSONB | | Donnees additionnelles |
| is_read | BOOLEAN | DEFAULT FALSE | Lu |
| created_at | TIMESTAMP | DEFAULT NOW() | |

### 11. saved_addresses
Adresses sauvegardees.

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Identifiant unique |
| user_id | UUID | FOREIGN KEY (users.id) | Utilisateur |
| label | VARCHAR(50) | | Label (Maison, Bureau, etc.) |
| address | TEXT | NOT NULL | Adresse |
| city | VARCHAR(100) | NOT NULL | Ville |
| postal_code | VARCHAR(10) | NOT NULL | Code postal |
| latitude | DECIMAL(10,8) | | Latitude |
| longitude | DECIMAL(11,8) | | Longitude |
| is_default | BOOLEAN | DEFAULT FALSE | Adresse par defaut |
| created_at | TIMESTAMP | DEFAULT NOW() | |

---

## Index

```sql
-- Performance indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_referral_code ON users(referral_code);
CREATE INDEX idx_products_store_id ON products(store_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_expiry_date ON products(expiry_date);
CREATE INDEX idx_products_is_flash_sale ON products(is_flash_sale) WHERE is_flash_sale = TRUE;
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_store_id ON orders(store_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_order_number ON orders(order_number);
CREATE INDEX idx_notifications_user_id_is_read ON notifications(user_id, is_read);
CREATE INDEX idx_stores_location ON stores USING GIST (point(longitude, latitude));
```

---

## Relations

```
users 1--* orders
users 1--* user_badges
users 1--* notifications
users 1--* saved_addresses
users 1--* referrals (as referrer)
users 1--* referrals (as referred)

stores 1--* products
stores 1--* orders

categories 1--* products

orders 1--* order_items
products 1--* order_items

badges 1--* user_badges
