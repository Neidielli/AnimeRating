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

