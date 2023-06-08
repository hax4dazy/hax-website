import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');
const config = {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true,
        }),
        paths: {
          base: dev ? '' : process.env.BASE_PATH,
        }
    },
    preprocess: [
        preprocess({
          postcss: true,
        }),
      ],

};


export default config;
