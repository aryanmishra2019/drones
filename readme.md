# Drones Project

This repository contains a project named "Drones" built with Express.js and TypeScript. It includes various APIs for managing users, sites, missions, and drones. The project uses MongoDB as the underlying database. To get started, make sure to install all the dependencies by running `npm install`.

## Setup

1. Clone the repository:

```shell
git clone https://github.com/aryanmishra2019/drones.git
```

2. Install dependencies:

```shell
cd drones
npm install
```

3. Configure the MongoDB connection in `src/config.ts`:

```typescript
export const MONGODB_URI = 'mongodb://localhost:27017/dronesdb';
```

4. Start the server:

```shell
npm run start
```

Make sure you have MongoDB installed and running on your system.

## DB Schema

## Drones table

| Field       | Type   | Required |
|-------------|--------|----------|
| droneName   | String | true     |
| userEmail   | String | true     |
| siteId      | String | false    |
| droneType   | String | true     |
| makeName    | String | true     |

## Missions table

| Field        | Type    | Required |
|--------------|---------|----------|
| missionName  | String  | true     |
| siteId       | String  | true     |
| droneId      | String  | false    |
| alt          | Number  | true     |
| speed        | Number  | true     |
| category     | String  | true     |

## Sites table

| Field                   | Type   | Required |
|-------------------------|--------|----------|
| siteName                | String | true     |
| sitePosition            | Object |          |
| sitePosition.latitude   | String | true     |
| sitePosition.longitude  | String | true     |
| userEmail               | String | true     |

## Users table

| Field    | Type   | Required | Unique | Default                 |
|----------|--------|----------|--------|-------------------------|
| name     | String | true     |        |                         |
| userRole | String | true     |        |                         |
| email    | String | true     | true   |                         |
| password | String |          |        | DEFAULT_USER_PASSWORD   |


## APIs

### Authentication

- `POST /auth/login`: Authenticate a user and generate a JWT access token.

### User APIs

- `GET /user/:email`: Fetch a SiteUser by email.
- `POST /user/add`: Add a new SiteUser (admin only).
- `DELETE /user/delete/:email`: Delete a SiteUser by email (admin only).
- `PUT /user/update/:email`: Update user details (admin only).

### Site APIs

- `POST /site/add`: Add a new site (admin only).
- `GET /site/:siteId`: Fetch a site by siteId (admin only).
- `DELETE /site/:siteId`: Delete a site by siteId (admin only).
- `PUT /site/:siteId`: Update site information (admin only).

### Mission APIs

- `POST /mission/add`: Add a new mission (siteUser only).
- `GET /mission/:missionId`: Fetch a mission by missionId (siteUser only).
- `DELETE /mission/:missionId`: Delete a mission by missionId (siteUser only).
- `PUT /mission/:missionId`: Update mission information (siteUser only).

### Drone APIs

- `POST /drone/add`: Add drone information (admin only).
- `GET /drone/:droneId`: Fetch drone information by droneId.
- `DELETE /drone/:droneId`: Delete a drone by droneId (admin only).
- `PUT /drone/update/email/:droneId`: Allocate a drone to a user (admin only).
- `PUT /drone/update/site/:droneId`: Allocate a drone to a site (siteUser only).