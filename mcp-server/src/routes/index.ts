import { Router } from 'express';
import TestController from '../controllers/index';

const router = Router();
const testController = new TestController();

// Define routes
router.post('/dashboard/run-tests', testController.runDashboardTests);
router.get('/dashboard/test-results', testController.getDashboardTestResults);

export const setRoutes = (app) => {
    app.use('/api', router);
};