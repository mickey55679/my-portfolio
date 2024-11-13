import React from "react";


function Blog() {
  return (
    <div className="contain flex w-[90%] md:w-[80%] sm:w-[80%] mx-auto justify-between items-center flex-col md:flex-row my-[100px]">
      <div className="container_body md:w-[60%] w-[80%]">
        <h2 className="text-3xl font-bold">Its Heading</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Amet magnis
          ultricies ornare nascetur iaculis. Faucibus dolor curabitur in
          fermentum lacus proin. Sed blandit quam litora habitant lacus vivamus
          himenaeos orci auctor. Ultricies gravida libero in semper lacus leo
          ullamcorper semper. Pharetra litora efficitur in, viverra interdum
          nisl. Natoque nisl ullamcorper consequat; per orci commodo vehicula.
          Sodales volutpat nisl conubia quis ipsum per nam metus. Magnis congue
          erat pharetra vulputate sem mattis? Ridiculus commodo tristique
          scelerisque volutpat erat egestas felis. Curabitur ornare rutrum
          sagittis ad iaculis tortor! Interdum blandit dui interdum luctus,
          felis urna porta facilisi. Sapien ad ornare tellus eros adipiscing;
          dapibus sagittis. Proin nunc vestibulum purus purus efficitur amet.
          Imperdiet accumsan maecenas montes, turpis vehicula duis torquent
          tristique. Dui nullam pulvinar nec ex varius fringilla augue
          hendrerit. Curae nec taciti eget erat litora felis; adipiscing litora
          diam.
        </p>
      </div>
      <img src="https://cdn.pixabay.com/photo/2022/05/04/11/49/dried-flowers-7173793_1280.jpg" width="200px" className="rounded-md"/>
    </div>
  );
}

export default Blog;
