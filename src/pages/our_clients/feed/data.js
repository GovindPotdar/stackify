import { hrmsProjectImages } from './hrms';
import { ticTacToeProjectImages } from './ticTacToe';

const projectsLoadFeed = {
    "HRMS": hrmsProjectImages,
    "tic-tac-toe": ticTacToeProjectImages,
}

const allProjectNames = Object.keys(projectsLoadFeed);
const allProjectImages = Object.values(projectsLoadFeed).flat();

const getProjectImages = (name, page) => {
    if(name == 'all') return allProjectImages.slice((page-1)*20, page*20);
    const images = projectsLoadFeed[name];
    if(images === undefined) return [];
    return images.slice((page-1)*20, page*20);
}

export { allProjectNames, allProjectImages, projectsLoadFeed, getProjectImages }