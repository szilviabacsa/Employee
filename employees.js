import { Router } from "express";
import * as employeeControllers from "../controllers/employeeController.js"

const router = Router()

router.get("/", employeeControllers.getEmployees)
router.get("/:id", employeeControllers.getEmployeeById)
router.post("/", employeeControllers.saveEmployee)
router.put("/:id", employeeControllers.updateEmployee)
router.delete("/:id", employeeControllers.deleteEmployee)

export default router