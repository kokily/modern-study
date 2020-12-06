import React from 'react';

interface MenuItemProps {
  href: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, title }) => (
  <li>
    <a href={`${href}`}>{title}</a>
  </li>
);

const Menu = () => {
  return (
    <div className="navbar-default">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="menu_area alt-font">
              <nav className="navbar navbar-expand-lg navbar-light no-padding">
                <div className="navbar-header navbar-header-custom">
                  <a href="/" className="navbar-brand">
                    <img id="logo" src="/images/logo1.png" alt="Logo" />
                  </a>
                </div>

                <div className="navbar-toggler" />

                <ul
                  id="nav"
                  className="navbar-nav ml-auto"
                  style={{ display: 'none' }}
                >
                  <MenuItem href="/about" title="브랜드 스토리" />
                  <MenuItem href="/divide" title="모던스터디 차별성" />
                  <li>
                    <a href="/studyzone">인테리어 공간</a>
                    <ul>
                      <MenuItem href="/studyzone" title="스터디 존" />
                      <MenuItem href="/privacyroom" title="1인 집중실" />
                      <MenuItem href="/cafezone" title="카페 존" />
                      <MenuItem href="/studyroom" title="스터디 룸" />
                      <MenuItem href="/etcroom" title="기 타" />
                    </ul>
                  </li>
                  <MenuItem href="/event" title="이벤트&커뮤니티" />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
