-- DATABASE
CREATE DATABASE WAREHOUSE;

-- CITY 
CREATE TABLE CITY (
    CITY_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    CITY CHAR(20),
    STATE CHAR(20)
);

-- WAREHOUSE
CREATE TABLE WAREHOUSE (
    WID INTEGER AUTO_INCREMENT PRIMARY KEY,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    -- EXTRACONTEXT JSON,
    CITY_ID INTEGER,
    FOREIGN KEY (CITY_ID) REFERENCES CITY(CITY_ID)
);

--  STORES
CREATE TABLE STORES (
    SID INTEGER AUTO_INCREMENT PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    WID INTEGER,
    FOREIGN KEY (WID) REFERENCES WAREHOUSE(WID)
);

-- CUSTOMERS
CREATE TABLE CUSTOMER (
    CNO INTEGER AUTO_INCREMENT PRIMARY KEY,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20)
);

-- ORDERS
CREATE TABLE ORDERS (
    ONO INTEGER AUTO_INCREMENT PRIMARY KEY,
    ODATE DATE,
    CNO INTEGER,
    FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO)
);

-- ITEMS
CREATE TABLE ITEMS (
    ITEMNO INTEGER AUTO_INCREMENT PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5, 2)
);

-- ITEMS_ORDERS 
CREATE TABLE ITEMS_ORDERS(
    ITEM_ORDER_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    ORDERED_QUANTITY INTEGER,
    ONO INTEGER,
    ITEMNO INTEGER,
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- STORES_ITEMS
CREATE TABLE IF NOT EXISTS STORES_ITEMS(
    STORE_ITEM_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    QUANTITY INTEGER,
    SID INTEGER,
    ITEMNO INTEGER,
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- CITY
INSERT INTO CITY(CITY, STATE) VALUES ('PUNE', 'MAHARASHTRA');
INSERT INTO CITY(CITY, STATE) VALUES ('LUCKNOW', 'UTTAR PRADESH');
INSERT INTO CITY(CITY, STATE) VALUES ('JAIPUR', 'RAJASTHAN');

-- WAREHOUSE
INSERT INTO WAREHOUSE(WNAME, LOCATION, CITY_ID) VALUES ('W_NAME_1', 'LOCACTION_1' ,1);
INSERT INTO WAREHOUSE(WNAME, LOCATION, CITY_ID) VALUES ('W_NAME_2', 'LOCACTION_2' ,2);
INSERT INTO WAREHOUSE(WNAME, LOCATION, CITY_ID) VALUES ('W_NAME_3', 'LOCACTION_3' ,3);
INSERT INTO WAREHOUSE(WNAME, LOCATION, CITY_ID) VALUES ('W_NAME_4', 'LOCACTION_4' ,3);

-- STORES
INSERT INTO STORES(STORE_NAME, LOCATION_CITY, WID ) VALUES('STORE1', 'NANDYAL', 1);
INSERT INTO STORES(STORE_NAME, LOCATION_CITY, WID ) VALUES('STORE2', 'KURNOOL', 2);
INSERT INTO STORES(STORE_NAME, LOCATION_CITY, WID ) VALUES('STORE3', 'KUR', 1);

-- CUSTOMER
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('YOGI ADITYANATH', 'CM_HOUSE', 'LUCKNOW');
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('NARENDRA MODI', 'PM_HOUSE', 'NEW DELHI');
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('PATIL', 'HOUSE', 'NAGPUR');

-- ORDERS
INSERT INTO ORDERS(ODATE,CNO) VALUES('2022-12-02', 1);
INSERT INTO ORDERS(ODATE,CNO) VALUES('2016-11-08', 2);

-- ITEMS
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('CHICKEN', 1.00, 180.56);
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('FISH', 2.55, 351.85);

-- ITEMS_ORDERS
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(2, 1, 1);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(6, 2, 2);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(1, 1, 2);

-- STORE_ITEMS
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(30, 1, 1);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(8, 2, 2);

-- DISPLAY ALL TABLES
SELECT * FROM CITY;
SELECT * FROM WAREHOUSE;
SELECT * FROM STORES;
SELECT * FROM CUSTOMER;
SELECT * FROM ORDERS;
SELECT * FROM ITEMS;
SELECT * FROM ITEMS_ORDERS;
SELECT * FROM STORES_ITEMS;