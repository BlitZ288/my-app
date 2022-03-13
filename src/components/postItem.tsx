import React from 'react';
import IPostItemProps from './type/IPostItemProps';
import MyButtonSecondary from './UI/button/MyButtonSecondary';

const Postitem = (postItem:IPostItemProps) => {
    
    return (
    <div>
        <div className="post">
          <div className="post__content">
            <strong>{postItem.number?? +1 }. {postItem.title}</strong>
            <div>
                {postItem.body}
            </div>
            </div>
            <div className="post__btns">
                <MyButtonSecondary>Удалить</MyButtonSecondary>
            </div>
        </div>
    </div>
    );
}

export default Postitem;
