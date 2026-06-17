# EasyShop

## Overview

EasyShop is a retail shopping companion platform designed to reduce friction in the shopping experience for customers and improve product discoverability within retail stores.

The platform integrates with existing Point of Sale (POS) systems used by supermarkets and retail stores, enabling customers to quickly find products, view product locations within stores, manage shopping lists, and access digital receipts.

Rather than replacing existing retail infrastructure, EasyShop enhances it by leveraging data from existing POS systems.

---

## Problem Statement

Customers often experience challenges when shopping in retail stores, including:

* Difficulty locating products within large stores
* Uncertainty about product availability
* Time spent searching for items
* Loss or damage of paper receipts
* Inefficient shopping planning

EasyShop aims to solve these challenges through a digital-first shopping experience.

---

## Features

### Product Search & Discovery

Customers can search for products and quickly find relevant information such as:

* Product name
* Category
* Product location
* Aisle number
* Shelf number

### Digital Receipts

Customers can access receipts digitally after purchases, reducing the risk of lost or damaged paper receipts.

### Smart Shopping Lists

Customers can create shopping lists and optimize their shopping journey before visiting a store.

### POS Integration

EasyShop integrates with existing retail POS systems to retrieve:

* Product information
* Inventory data
* Receipt information

Current integration target:

* Vendloop POS

---

## System Architecture

EasyShop follows a layered architecture:

* Presentation Layer (REST APIs)
* Service Layer (Business Logic)
* Data Layer (Database)
* Integration Layer (External POS Systems)

The platform enriches product data from external POS providers with store-specific information such as product locations.

---

## Core Entities

* User
* Store
* Category
* ProductReference
* ShoppingList
* ShoppingListItem
* Receipt
* ReceiptItem
* CategoryLocation
* POSIntegration

---

## Technology Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* PostgreSQL

### API Integration

* REST APIs
* POS Integration

### Documentation

* UML Class Diagrams
* Use Case Diagrams
* Entity Relationship Diagrams (ERD)

---

## Future Enhancements

Planned features include:

* Store navigation and indoor mapping
* Shopping route optimization
* Home delivery integration
* Product recommendations
* Customer analytics for retailers
* Multi-POS support
* Mobile application

---

## Project Status

🚧 In Development

This project is currently in the design and prototype phase. Features and architecture may evolve as development progresses.
For collaboration, discussions, or project inquiries, connect with the developers through their GitHub profiles:

* Nelly: https://github.com/nelly439
* Adamson: https://github.com/Adamsonoladipupo

---

## Vision

To make retail shopping faster, smarter, and friction-free by connecting customers with the products they need through existing retail infrastructure.



