import axios from "axios"
import * as Routes from "./rails-routes.js"

interface Params{
	q: { name_cont: string }
}
export function bands({q}: Params) { return axios.get(Routes.bands_path()+".json", {params: {q}}) }