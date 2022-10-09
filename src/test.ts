import "dotenv/config";
import { Client } from "./index";

(async () => {
	const client = new Client(<string>process.env.ID, <string>process.env.SECRET);

	const auth_process = await client.auth_manager.init_auth_process("http://localhost:3333/callback", ["public", "projects", "profile"], {port: 3333, callback_function: async (user) => {
		if(auth_process)
			client.auth_manager.stop_auth_process(auth_process.id);
		//const teams = await user.get("/me/teams");
		//console.log(teams?.data[0]);
	}});
	if(auth_process)
		console.log(auth_process.url);
})();
