import axios from 'axios';

// Instagram API Controller
export const getInstagramData = async (req, res, next) => {
    try {
        const { accessToken, instagramUserId } = req.body;

        const url = `https://graph.instagram.com/${instagramUserId}?fields=id,username,followers_count,media_count&access_token=${accessToken}`;
        const response = await axios.get(url);

        const data = response.data;
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Facebook API Controller
export const getFacebookData = async (req, res, next) => {
    try {
        const { accessToken, pageId } = req.body;

        const url = `https://graph.facebook.com/${pageId}?fields=id,name,fan_count,talking_about_count&access_token=${accessToken}`;
        const response = await axios.get(url);

        const data = response.data;
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Twitter API Controller
export const getTwitterData = async (req, res, next) => {
    try {
        const { bearerToken, username } = req.body;

        const url = `https://api.twitter.com/2/users/by/username/${username}`;
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        });

        const data = response.data;
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
