<a name="readme-top"></a>

## About The Project

Hello, I'm Quee, a passionate software engineer. Welcome to my portfolio! This project showcases my skills and expertise in software development. I will regularly update this portfolio with new projects and updates, so be sure to follow me for the latest news and releases. Feel free to explore my work and get in touch if you have any inquiries or collaboration opportunities. Let's create amazing things together! 😀

### Built With

- Development

* [![Typescript][Typescript.dev]][Typescript-url]
* [![React][React.js]][React-url]
* [![Vite][Vite.dev]][Vite-url]

- Deployment

* [![Docker][Docker.dev]][Docker-url]
* [![Nginx][Nginx.dev]][Nginx-url]
* [![AWS][AWS.cloud]][AWS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage

1. Clone the repo
   ```sh
   git clone https://github.com/queekao/portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. You can run server side rendering by changing the index.html to `entry-client.tsx` and run command
   ```sh
   npm run dev
   ```
4. For no server side rendering we use `main.tsx` and run
   ```sh
   npm run dev:noSSR
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Trouble Shooting

1.  Dealing with the challenge of large file sizes`maximum size:50MB` was quite a task for me. However, I successfully resolved this issue by utilizing `git-lfs`.
2.  I recently encountered an issue with the removal of my public zone in Route53. To address this, I updated the `NS (Name Server)` records of my domain with the new public hosted zone. By making this update, I ensured that my domain was properly connected to the correct `public zone` in `Route53`, resolving any potential issues related to the removal of the previous zone. In addition, I enhanced the configuration of `CloudFront` to leverage edge locations for caching web content.

### Contact Me

Email:[xeriok92599@gmail.com]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- MARKDOWN IMAGE LINK: https://shields.io/ -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Typescript.dev]: https://img.shields.io/badge/-Typescript-blue
[Typescript-url]: https://www.typescriptlang.org/

<!-- [React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB -->

[React.js]: https://img.shields.io/badge/-React-blue
[React-url]: https://reactjs.org/
[Vite.dev]: https://img.shields.io/badge/-Vite-purple
[Vite-url]: https://vitejs.dev/
[Docker.dev]: https://img.shields.io/badge/-Docker-blue
[Docker-url]: https://www.docker.com/
[Nginx.dev]: https://img.shields.io/badge/-Nginx-brightgreen
[Nginx-url]: https://www.nginx.com/
[AWS.cloud]: https://img.shields.io/badge/-AWS-yellow
[AWS-url]: https://aws.amazon.com
