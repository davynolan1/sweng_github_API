import React from 'react';
import Moment from 'react-moment';
import '../style.css'


const ProfileDetails = (props) => {
    let bio = new String(props.infoclean.bio);
    var bioCrop = bio.substring(0, 22)
    var newBio = bioCrop.concat("...")
    return (
        <div >
            <div class="profile-img">
                {props.infoclean.avatar_url ?
                    <img src={props.infoclean.avatar_url}
                        alt="Profile"
                        class="profile-img-size" /> : null}
            </div>
            <br></br>
            <div class="profile-info">
                <div>
                    {props.infoclean.name ? <div><p class="details-headings">Name: <span class="details"> {props.infoclean.name}</span></p></div> : null}
                </div>
                <div>
                    {props.infoclean.bio ? <div><p class="details-headings">Bio: <span class="details">{newBio}</span></p></div> : null}
                </div>
                <div>
                    {props.infoclean.created_at ? <div><p class="details-headings">Joined: <span class="details">{
                        <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</span></p></div> : null}

                </div>
                <div>
                    {props.infoclean.blog ? <div><p class="details-headings">Blog: <span class="details"><a href={
                        props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
                            : "http://" + props.infoclean.blog} target="_blank">{props.infoclean.blog}</a></span></p></div> : null}

                </div>
                <div>
                    {props.infoclean.location ? <div><p class="details-headings">Location: <span class="details">{props.infoclean.location}</span></p></div> : null}

                </div>
                <div>
                    {props.infoclean.company ? <div><p class="details-headings">Company: <span class="details">{props.infoclean.company}</span></p></div> : null}

                </div>
                <div>
                    {props.infoclean.public_repos ? <div><p class="details-headings">Public Repos: <span class="details">{props.infoclean.public_repos}</span></p></div> : null}

                </div>
                <div>
                    {props.infoclean.followers ? <div><p class="details-headings">Followers: <span class="details">{props.infoclean.followers}</span></p></div> : null}

                </div>
                <div>
                    {props.infoclean.following ? <div><p class="details-headings">Following: <span class="details">{props.infoclean.following}</span></p></div> : null}
                </div>
                <div>
                    {props.infoclean.name ?
                        <div>
                            <p class="details-headings">
                                <a href={props.infoclean.url}>View on GitHub</a>

                            </p><br>
                            </br></div>
                        : null}
                </div>
                <br></br>
            </div>
        </div>
    )
}; export default ProfileDetails;