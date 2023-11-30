/**
 * @swagger
 * tags:
 *   - name: Install
 *     description: Operations related to database installation
 *   - name: Anime
 *     description: Anime-related operations
 *   - name: User
 *     description: User-related operations
 *   - name: Rating
 *     description: Operations related to anime reviews
 *   - name: Auth
 *     description: Authentication-related operations
 */

/**
 * @swagger
 * /install:
 *   get:
 *     summary: Database installation
 *     tags: [Install]
 *     responses:
 *       200:
 *         description: Database installed successfully
 *       500:
 *         description: Internal server error during installation
 */

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Register a new anime (admin)
 *     tags: [Anime]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: AnimeData
 *         in: body
 *         description: Data of the anime to be registered
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *     responses:
 *       200:
 *         description: Anime registered successfully
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /edit/{title}:
 *   put:
 *     summary: Update an existing anime (admin)
 *     tags: [Anime]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: AnimeData
 *         in: path
 *         description: Data of the anime to be updated
 *         required: true
 *         schema:
 *           type: string
 *       - name: AnimeData
 *         in: body
 *         description: Updated data of the anime
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *     responses:
 *       200:
 *         description: Anime updated successfully
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Anime not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /delete/{title}:
 *   delete:
 *     summary: Delete an existing anime (admin)
 *     tags: [Anime]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: AnimeData
 *         in: path
 *         description: Title of the anime to be updated
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime updated successfully
 *       401:
 *         description: Not authorized
 *       404:
 *         description: Anime not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /list:
 *   get:
 *     summary: Get a list of anime (admin)
 *     tags: [Anime]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number for paginated results
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - name: pageSize
 *         in: query
 *         description: Number of items per page
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *     responses:
 *       200:
 *         description: List of anime retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /list:
 *   get:
 *     summary: Get a list of anime (admin)
 *     tags: [Anime]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: title
 *         in: params
 *         description: Filter anime by title
 *         required: false
 *         schema:
 *           type: string
 *       - name: limite
 *         in: query
 *         description: Page number for paginated results
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - name: pagina
 *         in: query
 *         description: Number of items per page
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *     responses:
 *       200:
 *         description: List of anime retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *       401:
 *         description: Not authorized
 *       500:
 *         description: Internal server error
 */



/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Auth]
 *     parameters:
 *       - name: Credentials
 *         in: body
 *         description: User credentials for authentication
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User successfully authenticated
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */

