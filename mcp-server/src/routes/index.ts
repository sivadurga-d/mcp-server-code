import { Router } from 'express';
import TestController from '../controllers';

const router = Router();
const testController = new TestController();

export function setRoutes(app) {
    app.use('/api/tests', router);
    
    router.post('/run', testController.runTest.bind(testController));
    router.get('/results', testController.getTestResults.bind(testController));
}