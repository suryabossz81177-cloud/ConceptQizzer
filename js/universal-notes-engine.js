/*==================================================
  CONCEPT QUIZZER
  UNIVERSAL NOTES ENGINE
  Package 12.5 — Step 4
==================================================*/

(function () {

  "use strict";

  window.ConceptQuizzer =
    window.ConceptQuizzer || {};

  function getElement(id) {
    return document.getElementById(id);
  }


  function renderChapter(chapter) {

    if (!chapter) {
      console.error(
        "Universal Notes Engine: ChapterData not found."
      );
      return;
    }


    const title =
      getElement("chapterTitle");

    const heading =
      getElement("notesHeading");

    const description =
      getElement("notesDescription");

    const summary =
      getElement("chapterSummary");

    const notes =
      getElement("notesContent");

    const important =
      getElement("importantPoints");

    const terms =
      getElement("keyTermsContainer");


    /* TITLE */

    if (title) {
      title.textContent =
        chapter.title || "Chapter";
    }


    if (heading) {
      heading.textContent =
        chapter.title || "Chapter Notes";
    }


    /* DESCRIPTION */

    if (description) {
      description.textContent =
        chapter.description || "";
    }


    /* SUMMARY */

    if (summary) {
      summary.textContent =
        chapter.summary || "";
    }


    /* NOTES */

    if (notes) {

      notes.innerHTML = "";

      (chapter.sections || [])
        .forEach(function (section, index) {

          const card =
            document.createElement("div");

          card.className =
            "noteCard";

          card.dataset.index =
            index;


          let html = "";

          if (section.title) {

            html += `
              <h3>
                ${section.title}
              </h3>
            `;

          }


          if (section.blocks) {

            section.blocks.forEach(
              function (block) {

                if (
                  block.type ===
                  "paragraph"
                ) {

                  html += `
                    <p>
                      ${block.text || ""}
                    </p>
                  `;

                }


                else if (
                  block.type ===
                  "definition"
                ) {

                  html += `
                    <div class="definitionBox">

                      <h4>
                        ${block.title || "Definition"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "example"
                ) {

                  html += `
                    <div class="exampleBox">

                      <h4>
                        ${block.title || "Example"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "application"
                ) {

                  html += `
                    <div class="applicationBox">

                      <h4>
                        ${block.title || "Application"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "fact"
                ) {

                  html += `
                    <div class="factBox">

                      <h4>
                        💡 ${block.title || "Fact"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "warning"
                ) {

                  html += `
                    <div class="warningBox">

                      <h4>
                        ⚠️ ${block.title || "Warning"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "tip"
                ) {

                  html += `
                    <div class="tipBox">

                      <h4>
                        🧠 ${block.title || "Tip"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "examTip"
                ) {

                  html += `
                    <div class="examBox">

                      <h4>
                        🎯 ${block.title || "Exam Tip"}
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }


                else if (
                  block.type ===
                  "summary"
                ) {

                  html += `
                    <div class="infoCard">

                      <h4>
                        📌 Summary
                      </h4>

                      <p>
                        ${block.text || ""}
                      </p>

                    </div>
                  `;

                }

              }
            );

          }


          else if (section.content) {

            html += `
              <p>
                ${section.content}
              </p>
            `;

          }


          card.innerHTML =
            html;

          notes.appendChild(
            card
          );


          /* LAST READ */

          card.addEventListener(
            "click",
            function () {

              const chapterId =
                chapter.id ||
                "unknown";

              localStorage.setItem(
                "cq-last-read-" + chapterId,
                index
              );

            }
          );

        });

    }


    /* IMPORTANT POINTS */

    if (important) {

      important.innerHTML = "";

      (chapter.importantPoints || [])
        .forEach(function (point) {

          const item =
            document.createElement("li");

          item.textContent =
            point;

          important.appendChild(
            item
          );

        });

    }


    /* KEY TERMS */

    if (terms) {

      terms.innerHTML = "";

      (chapter.keyTerms || [])
        .forEach(function (term) {

          const chip =
            document.createElement("span");

          chip.textContent =
            term;

          terms.appendChild(
            chip
          );

        });

    }


    console.log(
      "Universal Notes Engine loaded:",
      chapter.title
    );

  }


  /* Listen for the Universal Chapter Loader */

  window.addEventListener(
    "cq:chapter-loaded",
    function (event) {

      if (
        event.detail &&
        event.detail.chapter
      ) {

        renderChapter(
          event.detail.chapter
        );

      }

    }
  );


  /*
    If ChapterData is already available
    when this engine loads, render it.
  */

  if (
    typeof window.ChapterData !==
    "undefined"
  ) {

    renderChapter(
      window.ChapterData
    );

  }


  window.ConceptQuizzer.renderNotes =
    renderChapter;


})();
