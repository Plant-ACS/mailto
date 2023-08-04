import { z } from "zod"

const FileSchema = z.string().url()

export default FileSchema
