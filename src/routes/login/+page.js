import { redirect, error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    let res = await fetch(`https://sovngarde.infinitybots.gg/herpes/auth`)

    if (res.ok) {
        let redirectUrl = await res.text();

        throw redirect(302, redirectUrl);
    } else {
        let errorData = await res.text();
        throw error(500, errorData);
    }
}
