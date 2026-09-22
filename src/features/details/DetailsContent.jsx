import styles from './DetailsContent.module.css';

export default function DetailsContent({ item }) {
  const overview = item.overview;
  const reviews = item.reviews?.results || [];
  const totalReviews = item.reviews?.total_results || 0;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className={styles.contentContainer}>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <p className={styles.overviewText}>{overview}</p>
      </section>

      <section className={styles.section}>
        <div className={styles.reviewsHeader}>
          <h2 className={styles.sectionTitle}>Reviews</h2>
          <span className={styles.reviewsCount}>{totalReviews} reviews</span>
        </div>

        {reviews.length > 0 ? (
          <div className={styles.reviewsGrid}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                  <span className={styles.authorName}>{review.author}</span>
                  {review.author_details?.rating && (
                    <span className={styles.reviewRating}>
                      ★ {review.author_details.rating}
                    </span>
                  )}
                </div>
                
                <p className={styles.reviewContent}>{review.content}</p>
                
                <span className={styles.reviewDate}>
                  {formatDate(review.created_at)}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noReviews}>No reviews available yet.</p>
        )}
      </section>

    </div>
  );
}