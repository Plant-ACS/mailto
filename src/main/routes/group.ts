//@deno-types="npm:@types/express@4"
import { Router } from "$express"
import CreateGroup from "@controllers/use-cases/group/create.ts"
import GroupSchema from "@core/entities/models/group.ts"
import AddEmailInGroup from "@controllers/use-cases/group/add-email.ts"
import AlterSubNameOfGroup from "@controllers/use-cases/group/alter-subname.ts"
import { RenameGroup } from "@controllers/use-cases/group/rename.ts"
import DeleteGroup from "@controllers/use-cases/group/delete.ts"
import FindGroup from "@controllers/use-cases/group/find.ts";

const groupRoutes = Router()

groupRoutes.post("/", async (req, res) => {
	const { name, subName } = req.body
	if (!name || !subName) return res.status(400).json({ message: "Missing params" })

	try { GroupSchema.parse({...req.body, emails: []}) } catch (err) { return res.status(400).json({ message: "Missing params" }) }

	return await new CreateGroup().create({ name, subName })
		.then((group) => res.status(201).json(group))
		.catch((err) => res.status(400).json({ message: err.message }))
})

groupRoutes.put("/:subName/:name/add-email", async (req, res) => {
	const { email } = req.body
	const { name, subName } = req.params
	if (!name || !subName || !email) return res.status(400).json({ message: "Missing params" })

	try { GroupSchema.parse({ name, subName, emails: [email]}) } catch (_err) { return res.status(400).json({ message: "Missing params" }) }

	return await new AddEmailInGroup().add({ name, subName, email })
		.then(() => res.status(201))
		.catch((err) => res.status(400).json({ message: err.message }))
})

groupRoutes.put('/:subName/:name/alter-subName', async (req, res) => {
	const { newSubName } = req.body
	const { name, subName } = req.params

	if (req.body.length !== 1) return res.status(400).json({ message: "Invalid params" })

	if (!name || !subName || !newSubName) return res.status(400).json({ message: "Missing params" })
	try { GroupSchema.parse({ name, subName, emails: []}) } catch (_err) { return res.status(400).json({ message: "Missing params" }) }

	return await new AlterSubNameOfGroup().alterSubNameOfGroup({ group: { name, subName }, newSubName })
})

groupRoutes.put('./:subName/:name/rename', async (req, res) => {
	const { new: newName } = req.body
	const { name: old, subName } = req.params

	if (req.body.length !== 1) return res.status(400).json({ message: "Invalid params" })

	if (!old || !subName || !newName) return res.status(400).json({ message: "Missing params" })
	try { GroupSchema.parse({ newName, subName, emails: []}) } catch (_err) { return res.status(400).json({ message: "Missing params" }) }
	try { GroupSchema.parse({ old, subName, emails: []}) } catch (_err) { return res.status(400).json({ message: "Missing params" }) }

	return await new RenameGroup().rename({ subName, old, new: newName })
})

groupRoutes.put('/:subName/rename', async (req, res) => {
	const { new: newSubName } = req.body
	const { subName: old } = req.params

	if (!old || !newSubName) return res.status(400).json({ message: "Missing params" })

	if (req.body.length !== 1) return res.status(400).json({ message: "Invalid params" })

	return await new AlterSubNameOfGroup().renameSubName({ old, new: newSubName })
		.then(() => res.status(200))
		.catch((err) => res.status(400).json({ message: err.message }))
})

groupRoutes.delete('/:subName/:name', async (req, res) => {
	const { name, subName } = req.params

	if (!name || !subName) return res.status(400).json({ message: "Missing params" })

	if (req.body.length !== 0) return res.status(400).json({ message: "Invalid params" })

	return await new DeleteGroup().delete({ name, subName })
})

groupRoutes.get('/:subName/:name', async (req, res) => {
	const { name, subName } = req.params

	if (!name || !subName) return res.status(400).json({ message: "Missing params" })

	return await new FindGroup().findOne({ name, subName })
		.then((group) => res.status(200).json(group))
		.catch((err) => res.status(400).json({ message: err.message }))
})

groupRoutes.get('/:subName', async (req, res) => {
	const { subName } = req.params
	const { page, limit, order, orderBy } = req.query

	return await new FindGroup().findAllBySubName({ subName })
})
export default groupRoutes
