document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title">Welcome to Avery the fluffy's website</div>
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <div class="sidebar-section">
          <!-- NAVIGATION -->
          <div class="sidebar-title">Section Title</div>
	        <nav>
	          <ul>
	            <li><a href="/">Home</a></li>
	            <li><a href="/html/about_me.html">About me</a></li>
	            <li>
                <details>
                  <summary>Interests</summary>
                  <ul>
                    <li><a href="/html/media_interests.html">Media</a></li>
                    <li><a href="/html/topic_interests.html">Topics/Hobbies</a></li>
                    <li><a href="/html/topic_interests.html">Creators</a></li>
                    <li><a href="/html/topic_interests.html"></a></li>
                    <li><a href="/html/topic_interests.html">Books</a></li>
                  </ul>
                </details>
              </li>
	            <li><a href="/page3">Page 3</a></li>
	          </ul>
	        </nav>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">3</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">4</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/18/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <div class="sidebar-section">
          
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Necessit atibus perferendis inventore tempore vel optio similique blanditiis quasi quam?</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <ul>
            <li>List</li>
            <li>List</li>
            <li><a href="/">List</a></li>
            <li>List</li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <img class="full-width-image" src="https://picsum.photos/id/18/1000/400">
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Section Title</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
        	<textarea><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a></textarea>
          </div>
        </div>
      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Footer Text. <a href="/">Link.</a> Template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    /* Homepage */
    if (href == "/" || href == "/html/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
