CREATE DATABASE casino_db;

USE casino_db;

-- Create the Casino table
CREATE TABLE Casino (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

-- Create the Type table
CREATE TABLE Type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Create the Country table
CREATE TABLE Country (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    isAllowed BOOLEAN DEFAULT TRUE,  
    gameId INT,                     
    FOREIGN KEY (gameId) REFERENCES Game(id) 
);

-- Create the Game table
CREATE TABLE Game (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    casinoId INT,                    
    typeId INT,                       
    countryId INT,                    
    FOREIGN KEY (casinoId) REFERENCES Casino(id), 
    FOREIGN KEY (typeId) REFERENCES Type(id),     
    FOREIGN KEY (countryId) REFERENCES Country(id) 
);

-- Create the Player table
CREATE TABLE Player (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    countryId INT,                    
    FOREIGN KEY (countryId) REFERENCES Country(id) 
);

-- Create the Favourite table
CREATE TABLE Favourite (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gameId INT,                       
    playerId INT,                     
    FOREIGN KEY (gameId) REFERENCES Game(id),     
    FOREIGN KEY (playerId) REFERENCES Player(id)  
);